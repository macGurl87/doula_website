'use client';

import {useAuth} from '@/context/auth';
import Link from 'next/link';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {Avatar, AvatarFallback} from './ui/avatar';
import Image from 'next/image';

export default function AuthButtons() {
	const auth = useAuth(); //already using the auth hook in this component so we can tap into the auth objext
	//On this auth object we'll have the user's custom claims, which means if we scroll down to our menu items, all we need to do it optionally render the admin dashboard menu item and the MyFavorites menu item.

	return (
		<div>
			{!!auth?.currentUser && (
				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							{/* If the user has a photoURL, display it */}
							{!!auth.currentUser.photoURL && (
								<Image
									src={auth.currentUser.photoURL}
									alt={`${auth.currentUser.displayName} avatar`}
									width={70}
									height={70}
								/>
							)}
							<AvatarFallback>
								{/* If no photoURL, display the user's initials */}
								{(auth.currentUser.displayName || auth.currentUser.email)?.[0]}
							</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>
							<div>{auth.currentUser.displayName}</div>
							<div className='font-normal text-xs'>
								{auth.currentUser.email}
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem asChild>
							<Link href='/my-account'>My Account</Link>
						</DropdownMenuItem>
						{/* Will conditionally render the Admin dashboard bc ONLY admin should have access to this */}
						{!!auth.customClaims?.admin && (
							<DropdownMenuItem asChild>
								<Link href='/admin-dashboard'>Admin Dashboard</Link>
							</DropdownMenuItem>
						)}
						{/* will again be conditionally rendered bc ONLY non-admin should be able to see their favorite properties */}
						{!auth.customClaims?.admin && (
							<DropdownMenuItem asChild>
								<Link href='/account/my-favorites'>My Favorites</Link>
							</DropdownMenuItem>
						)}
						<DropdownMenuItem
							onClick={async () => {
								await auth.logout();
							}}
						>
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)}
			{!auth?.currentUser && (
				<div className='flex gap-2 items-center'>
					<Link
						href='/login'
						className='uppercase tracking-widest hover:underline'
					>
						Login
					</Link>
					<div className=' h-8 w-[1px] bg-white/50' />
					<Link
						href='/register'
						className='uppercase tracking-widest hover:underline'
					>
						Signup
					</Link>
				</div>
			)}
		</div>
	);
}

// This component displays the current user's email if they are logged in and a logout button.
// It uses the `useAuth` hook to access the authentication context.

//So the first time we log in admin will actually be false.
// But the first time we log in we do set the token in cookies using the set token server action.
// So it's within then the set token in context and actions.js.
// If we scroll down to set token, it's within here that we set the custom claims for that particular user.
// So we're going to need to log out, then log back in a second time.
// And when we log back in the second time, we should then see the admin flag set for our admin user account.
// So we'll be able to see this in action as part of our drop down menu items.

// we log in the first time as our admin, we will not see the admin dashboard menu item, but we will see the My Favorites menu item.

// However, when we log out and log back in for the second time to our admin account, we will then see the admin dashboard menu item and no longer see the My Favorites menu item.
